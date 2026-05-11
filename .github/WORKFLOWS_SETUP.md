 GitHub Actions Workflows Setup

This project includes GitHub Actions workflows for automated testing and deployment.

## Available Workflows

### 1. Netlify Deploy (`netlify-deploy.yml`)
Automatically deploys your website to Netlify when you push to the main branch.

**What it does:**
- Installs dependencies
- Builds your project
- Deploys to Netlify
- Posts deployment status on pull requests

**Required Secrets:**
- `NETLIFY_AUTH_TOKEN` - Your Netlify authentication token
- `NETLIFY_SITE_ID` - Your Netlify site ID
- `VITE_ADMIN_PASSWORD` - Admin dashboard password
- `VITE_GTM_ID` - Google Tag Manager ID
- `DATABASE_URL` - MySQL connection string
- `JWT_SECRET` - JWT signing secret

### 2. Tests & Linting (`tests.yml`)
Runs tests and code quality checks on every push and pull request.

**What it does:**
- Type checking with TypeScript
- Runs unit tests with Vitest
- Checks code formatting with Prettier

---

## Setup Instructions

### Step 1: Get Netlify Tokens

1. Go to https://app.netlify.com
2. Click your profile icon (top right)
3. Go to "User settings"
4. Click "Applications" in left sidebar
5. Click "New access token"
6. Give it a name: "GitHub Actions"
7. Copy the token

### Step 2: Get Netlify Site ID

1. Go to https://app.netlify.com
2. Click on your site
3. Go to "Site settings"
4. Scroll to "Site details"
5. Copy the "Site ID"

### Step 3: Add Secrets to GitHub

1. Go to your GitHub repository
2. Click "Settings" (top menu)
3. Click "Secrets and variables" → "Actions" (left sidebar)
4. Click "New repository secret"
5. Add each secret:

**Secret 1: NETLIFY_AUTH_TOKEN**
- Name: `NETLIFY_AUTH_TOKEN`
- Value: (paste your Netlify token from Step 1)
- Click "Add secret"

**Secret 2: NETLIFY_SITE_ID**
- Name: `NETLIFY_SITE_ID`
- Value: (paste your Netlify site ID from Step 2)
- Click "Add secret"

**Secret 3: VITE_ADMIN_PASSWORD**
- Name: `VITE_ADMIN_PASSWORD`
- Value: `SmbSmb64`
- Click "Add secret"

**Secret 4: VITE_GTM_ID**
- Name: `VITE_GTM_ID`
- Value: `GTM-WJKZBG9Z`
- Click "Add secret"

**Secret 5: DATABASE_URL**
- Name: `DATABASE_URL`
- Value: (your MySQL connection string)
- Click "Add secret"

**Secret 6: JWT_SECRET**
- Name: `JWT_SECRET`
- Value: (generate from https://www.uuidgenerator.net/)
- Click "Add secret"

### Step 4: Verify Workflows

1. Go to your GitHub repository
2. Click "Actions" tab
3. You should see the workflows listed
4. Make a test commit to trigger the workflows

---

## How Workflows Work

### On Every Push to Main

1. **Tests & Linting** runs:
   - Type checking
   - Unit tests
   - Code formatting

2. **Netlify Deploy** runs:
   - Installs dependencies
   - Builds your project
   - Deploys to Netlify
   - Posts deployment status

### On Pull Requests

1. **Tests & Linting** runs
2. **Netlify Deploy** creates a preview deployment
3. Status is posted on the pull request

---

## Monitoring Workflows

### View Workflow Status

1. Go to your GitHub repository
2. Click "Actions" tab
3. Click on a workflow run to see details
4. Click on a job to see logs

### Troubleshooting Failed Workflows

**Build failed:**
- Click on the failed workflow
- Scroll down to see error messages
- Fix the issue and push again

**Deployment failed:**
- Check that all secrets are set correctly
- Verify Netlify site ID is correct
- Check Netlify logs for more details

---

## Manual Workflow Triggers

You can manually trigger workflows from GitHub:

1. Go to "Actions" tab
2. Select the workflow
3. Click "Run workflow"
4. Select the branch
5. Click "Run workflow"

---

## Disabling Workflows

To temporarily disable a workflow:

1. Go to the workflow file (e.g., `.github/workflows/netlify-deploy.yml`)
2. Add `# ` before `on:` to comment it out
3. Commit and push

To re-enable:
1. Remove the `# ` comment
2. Commit and push

---

## Best Practices

1. **Always use secrets** for sensitive data (passwords, tokens, etc.)
2. **Test locally** before pushing to avoid failed workflows
3. **Monitor workflow runs** to catch issues early
4. **Keep secrets updated** when they expire or change
5. **Use meaningful commit messages** to track changes

---

## Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Netlify GitHub Integration](https://docs.netlify.com/integrations/github)
- [Storing Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)

---

## Support

If workflows fail:

1. Check the workflow logs for error messages
2. Verify all secrets are set correctly
3. Make sure your code builds locally
4. Check Netlify logs for deployment errors

For more help, see the GitHub Actions documentation or Netlify support.
