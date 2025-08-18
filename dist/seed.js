"use strict";
// // scripts/importHospitalInfo.ts
// import fs from 'fs';
// import csvParser from 'csv-parser';
// import { PrismaClient } from '../prisma/generated/prisma';
// const prisma = new PrismaClient();
// async function importHospitalInformationFromCSV(filePath: string) {
//    const hospitals: any[] = [];
//    return new Promise<void>((resolve, reject) => {
//       fs.createReadStream(filePath)
//          .pipe(csvParser())
//          .on('data', (row) => {
//             hospitals.push({
//                id: row.id,
//                facilityId: row.facilityId,
//                facilityName: row.facilityName,
//                address: row.address,
//                city: row.city,
//                state: row.state,
//                zip: row.zip,
//                telephone: row.telephone,
//                country: row.country,
//                hospitalType: row.hospitalType,
//                hospitalOwnership: row.hospitalOwnership,
//                hospitalOverallRating: row.hospitalOverallRating,
//                hospitalOverallRatingFootnote: row.hospitalOverallRatingFootnote,
//                emergencyServices: row.emergencyServices,
//             });
//          })
//          .on('end', async () => {
//             try {
//                for (const hospital of hospitals) {
//                   await prisma.hospitalInformation.create({
//                      data: hospital,
//                   });
//                }
//                console.log(`Imported ${hospitals.length} hospital records.`);
//                resolve();
//             } catch (err) {
//                console.error('Error importing data:', err);
//                reject(err);
//             } finally {
//                await prisma.$disconnect();
//             }
//          });
//    });
// }
// // Call the function if run directly
// if (require.main === module) {
//    const filePath = process.argv[2];
//    if (!filePath) {
//       console.error('Please provide a CSV file path.');
//       process.exit(1);
//    }
//    importHospitalInformationFromCSV(filePath);
// }
// // importHospitalInformationFromCSV('../src/data/Hospital_General_Information.csv')
