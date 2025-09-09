import fs from 'fs'
import csvParser from 'csv-parser'
import path from 'path'
import { providerManager } from './utils/providerHooks'
import { mockProviders } from './data/mockData'

function parseDate(dateStr: string): Date {
  try {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) {
      return new Date() // Return current date if invalid
    }
    return date
  } catch {
    return new Date() // Return current date if parsing fails
  }
}

async function parseCSV(filePath: string): Promise<any[]> {
  const results: any[] = []

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csvParser())
      .on('data', (data) => {
        // Parse JSON strings in the data
        Object.keys(data).forEach(key => {
          try {
            if (data[key].startsWith('[') || data[key].startsWith('{')) {
              data[key] = JSON.parse(data[key])
            }
          } catch (e) {
            // If parsing fails, keep the original string
          }
        })
        results.push(data)
      })
      .on('end', () => resolve(results))
      .on('error', reject)
  })
}

async function seed() {
  try {
    console.log('🎮 Initializing mock data (no database required)...')

    // Register mock providers for game results
    mockProviders.forEach(provider => {
      providerManager.registerProvider(provider.name, provider);
    });

    console.log('✅ Mock providers registered:')
    mockProviders.forEach(provider => {
      console.log(`   - ${provider.name} (${provider.type})`)
    });
    
    console.log('📦 Mock data ready - server can run without database')
  } catch (error) {
    console.error('Error initializing mock data:', error)
    throw error
  }
}

// Run the seed function if this file is executed directly
if (require.main === module) {
  seed()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { seed }
