# 🚀 Deployment Guide

## Railway Deployment

### **Prerequisites:**
- ✅ GitHub repository with your code
- ✅ Railway account
- ✅ Environment variables configured

---

## 🔧 **Environment Variables**

### **Required Variables:**
```env
# Server Configuration
PORT=3000
NODE_ENV=production

# MongoDB Configuration
DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"

# Football API Configuration
FOOTBALL_API_KEY=your_api_key_here
FOOTBALL_API_URL=https://v3.football.api-sports.io
FOOTBALL_API_HOST=v3.football.api-sports.io
```

---

## 📦 **Deployment Steps**

### **1. Connect to Railway:**
1. Go to [Railway](https://railway.app)
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your repository

### **2. Configure Environment Variables:**
In Railway dashboard, go to your project → Variables tab and add:

```env
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/database
FOOTBALL_API_KEY=your_football_api_key
FOOTBALL_API_URL=https://v3.football.api-sports.io
FOOTBALL_API_HOST=v3.football.api-sports.io
NODE_ENV=production
```

### **3. Deploy:**
Railway will automatically:
- ✅ Detect the Dockerfile
- ✅ Build the application
- ✅ Install dependencies
- ✅ Run TypeScript compilation
- ✅ Generate Prisma client
- ✅ Start the server

---

## 🐳 **Docker Configuration**

### **Multi-stage Build:**
- **Stage 1:** Install dev dependencies, build TypeScript, generate Prisma
- **Stage 2:** Install only production dependencies, copy built files

### **Optimizations:**
- ✅ Alpine Linux for smaller image size
- ✅ Non-root user for security
- ✅ Production-only dependencies in final stage
- ✅ Proper `.dockerignore` for faster builds

---

## 🔍 **Troubleshooting**

### **Build Errors:**
```bash
# If TypeScript not found:
# ✅ Fixed: Dockerfile now includes dev dependencies during build

# If Prisma errors:
# ✅ Fixed: Prisma generate runs after build
```

### **Runtime Errors:**
```bash
# Check environment variables:
echo $DATABASE_URL
echo $FOOTBALL_API_KEY

# Check logs in Railway dashboard
```

---

## 📊 **Health Checks**

### **Test Your Deployment:**
```bash
# Health check
curl https://your-app.railway.app/health

# API info
curl https://your-app.railway.app/

# Football endpoints
curl https://your-app.railway.app/api/football/countries
curl https://your-app.railway.app/api/football/teams/all
```

---

## 🎯 **Expected Endpoints**

### **Available After Deployment:**
- ✅ `GET /` - API information
- ✅ `GET /health` - Health check
- ✅ `GET /api/football/countries` - All countries
- ✅ `GET /api/football/teams/all` - All teams
- ✅ `GET /api/football/teams/search?name=...` - Search teams
- ✅ `GET /api/football/teams/:id` - Team by ID
- ✅ `GET /api/user/*` - User management endpoints

---

## 🚀 **Performance Features**

### **Built-in Optimizations:**
- ✅ **Caching:** 1-24 hour cache for API responses
- ✅ **Multi-stage Docker:** Smaller production image
- ✅ **Alpine Linux:** Faster startup times
- ✅ **Production dependencies only:** Reduced attack surface

---

## 📈 **Monitoring**

### **Railway Dashboard:**
- ✅ **Logs:** Real-time application logs
- ✅ **Metrics:** CPU, memory, network usage
- ✅ **Deployments:** Build and deployment history
- ✅ **Environment:** Variable management

---

## ✅ **Deployment Checklist**

- [ ] Repository connected to Railway
- [ ] Environment variables configured
- [ ] MongoDB connection string valid
- [ ] Football API key valid
- [ ] Build successful (no TypeScript errors)
- [ ] Health check endpoint responding
- [ ] Football endpoints working
- [ ] User endpoints working

---

## 🎊 **Success!**

Once deployed, your betting oracle backend will be available at:
```
https://your-app-name.railway.app
```

**Test the endpoints:**
```bash
# Get all countries
curl https://your-app.railway.app/api/football/countries

# Get all teams
curl https://your-app.railway.app/api/football/teams/all

# Search teams
curl "https://your-app.railway.app/api/football/teams/search?name=Manchester"
```

---

*Created: October 15, 2025*  
*Status: Production Ready ✅*
