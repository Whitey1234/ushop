# SCIC Next.js Project

This is a full-stack e-commerce application built with Next.js, MongoDB, and NextAuth.js. It includes features for user authentication, product management, and a shopping cart.

## Overview

The project is a modern, responsive e-commerce platform. It features a customer-facing storefront for browsing products and an admin dashboard for managing the product catalog. User authentication is handled by NextAuth.js, supporting both email/password and Google sign-in.

## Features

- **User Authentication:** Secure sign-up, sign-in, and session management with NextAuth.js.
  - Credentials (email/password) provider.
  - Google OAuth provider.
- **Admin Dashboard:** A protected area for administrators to manage products.
  - Add new products.
  - Edit existing products.
- **Product Catalog:** Public-facing pages to browse and view product details.
- **Shopping Cart:** Functionality for users to add products to their cart.
- **AI Chat Widget:** An integrated chat widget powered by the OpenAI API for customer support.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [DaisyUI](https://daisyui.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)
- **Authentication:** [NextAuth.js](https://next-auth.js.org/)
- **API Communication:** [Axios](https://axios-http.com/)
- **Password Hashing:** [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **AI:** [OpenAI](https://openai.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd scic-nextjs-project
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env.local` file in the root of the project and add the following environment variables. 

```
# MongoDB Connection String
MONGODB_URI=

# NextAuth.js
# Generate a secret with: openssl rand -base64 32
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000

# Google OAuth Credentials
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# OpenAI API Key
OPENAI_API_KEY=
```

### Running the Application

Once the dependencies are installed and the environment variables are set, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Make sure to set up the same environment variables in your Vercel project settings before deploying.