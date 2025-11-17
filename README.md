# iamsarker [Demo](https://sourav-sarker.netlify.app/)
Portfolio website for sourav sarker. 

**netlify account:** sourav.integrated95@gmail.com(with email,not sso)
**Sanity CMS:** sourav39.csesust@gmail.com(sso)

To get backend(sanity cms), you need to install dependencies in "./backend-sanity" folder and get UI view of db using sanity 
studio (after running in local: http://localhost:3333/desk)



In details: 

# Sanity Portfolio Backend

This is the Sanity CMS backend for the portfolio website. It provides a content management interface where you can manage all portfolio data including about sections, skills, work experience, testimonials, and more.

## Overview

This Sanity Studio instance is configured to manage content for a portfolio website. It includes schemas for:
- **Abouts** - About section content
- **Brands** - Brand logos and partners
- **Contact** - Contact information
- **Experiences** - Experience entries
- **Skills** - Skills and technologies
- **Testimonials** - Client testimonials
- **Work Experience** - Professional work history
- **Works** - Portfolio work items

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14 or higher recommended)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. Navigate to the backend-sanity directory:
   ```bash
   cd backend-sanity
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   Or if you prefer using yarn:
   ```bash
   yarn install
   ```

## Running the Application

### Development Mode

To start the Sanity Studio in development mode:

```bash
npm start
```

Or with yarn:
```bash
yarn start
```

The Sanity Studio will:
- Start a local development server (typically on `http://localhost:3333`)
- Automatically open in your default browser
- Enable hot-reloading for schema changes

### Accessing the Studio

Once the server is running:

1. Open your browser and navigate to `http://localhost:3333`
2. You'll be prompted to log in with your Sanity account
3. After logging in, you'll see the Sanity Studio interface with all your content types

### Project Configuration

The project is configured with:
- **Project ID**: `8dnsfw5f`
- **Dataset**: `production`
- **Project Name**: `sarker_portfolio`

This information is stored in `sanity.json`.

## Available Scripts

- `npm start` - Starts the Sanity Studio in development mode
- `npm run build` - Builds the Sanity Studio for production deployment

## Building for Production

To build the Sanity Studio for production:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory that can be deployed to a static hosting service.

## Project Structure

```
backend-sanity/
├── schemas/          # Content schema definitions
│   ├── abouts.js
│   ├── brands.js
│   ├── contact.js
│   ├── experiences.js
│   ├── schema.js    # Main schema file
│   ├── skills.js
│   ├── testimonials.js
│   ├── workExperience.js
│   └── works.js
├── config/          # Sanity configuration files
├── static/          # Static assets (favicon, etc.)
├── plugins/         # Custom Sanity plugins
├── package.json     # Project dependencies and scripts
└── sanity.json      # Sanity project configuration
```

## Troubleshooting

### Command Not Found Error

If you encounter `sanity: command not found`:

1. Ensure `@sanity/cli` is installed:
   ```bash
   npm install --save-dev @sanity/cli
   ```

2. Verify the binary exists:
   ```bash
   ls node_modules/.bin/sanity
   ```

### Port Already in Use

If port 3333 is already in use, Sanity will automatically try the next available port. Check the terminal output for the actual port number.

### Login Issues

If you have trouble logging in:
- Ensure you have access to the Sanity project with ID `8dnsfw5f`
- Check that you're using the correct Sanity account
- Verify your internet connection

### Dependency Issues

If you encounter dependency conflicts:
```bash
# Remove node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall dependencies
npm install
```

## Additional Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity Getting Started Guide](https://www.sanity.io/docs/introduction/getting-started)
- [Sanity Community Slack](https://slack.sanity.io/)

## Notes

- The development server supports hot-reloading, so changes to schemas will be reflected immediately
- The Sanity Vision plugin is enabled in development mode for query testing
- All content is stored in the Sanity cloud and synced in real-time




#install sanity backend: npm install -g @sanity/cli
#install sanity dependencies: sanity init
#start project: sanity start
#create schema
#Create Frontend {
    //shortcutForBoilerPlate: "rafce" (only after installing es7-react-react-native extension)
}

install dependecies: @sanity/client , @sanity/image-url , framer-motion, node-sass react-icons, react-tooltip


