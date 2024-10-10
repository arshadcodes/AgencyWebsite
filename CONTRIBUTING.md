# 🛠️ Contributor's Guide

### Welcome to our open-source project! 😊  
We’re so glad you’re here and interested in contributing to our **open-source project**! 😍 Whether you're a seasoned developer or this is your first time contributing to open source, this guide will walk you through everything you need to make your first pull request and help grow the project.


## 📑 Steps to Make Your First Contribution

### 1. Fork This Repository

Click the "Fork" button at the top right of this page to make your own copy of the repository.

### 2. Clone Your Fork

Clone the forked repository to your local machine:
```bash
git clone https://github.com/<your-github-username>/AgencyWebsite.git
```

### 3. Navigate to the Project Directory
Use the following command to enter the project folder:

``` bash
cd AgencyWebsite
```

### 4. Create a New Branch
Create a new branch for your work to keep your changes separate from the main codebase:

```bash
git checkout -b <your_branch_name>
```

### 5. Make Your Changes
Make your changes to the code, whether it’s fixing a bug, adding a feature, or updating the documentation.

### 6. Stage and Commit Your Changes
Stage all your changes:

```bash
git add .
```

Commit your changes with a meaningful message:

```bash
git commit -m "Add feature X or fix issue Y"
```

### 7. Push Your Changes
Push the changes to your forked repository:

```bash
git push -u origin <your_branch_name>
```

### 8. Create a Pull Request (PR)
Go to your repository on GitHub, and click the "Compare & Pull Request" button. Include a detailed description of what changes you made and why. See format for pull request below:

## Pull Request Format

When submitting a pull request, please use the following format to ensure clarity and consistency. This helps maintain the quality of the project and makes it easier for maintainers to review your changes.

### Pull Request Title
- Use a clear and descriptive title that summarizes the changes being made.
- Example: `Fix button alignment on homepage` or `Add new testimonial section to the website`

### Description
Provide a detailed description of the changes made in this pull request, including:

- **What** changes were made (e.g., features added, bugs fixed).
- **Why** these changes were necessary (e.g., user feedback, design updates).
- **How** the changes were implemented (e.g., specific technologies or methods used).

## Files Changed
Example:
- `README.md`
- `CONTRIBUTING.md`

### Checklist
Please ensure that the following tasks are completed before submitting your pull request:

- [ ] Code changes have been tested.
- [ ] Relevant documentation has been updated (if applicable).
- [ ] Any new features or changes include appropriate tests.
- [ ] Code adheres to the project's style guide and best practices.
- [ ] Commit messages are clear and follow the project's convention.

### Links to Issues
If your pull request addresses a specific issue, please reference it here using the format:
- Closes #issue-number (e.g., Closes #42)

### Screenshots (if applicable)
Include any relevant screenshots or GIFs to demonstrate the changes visually, especially for UI updates.


## 🔄 Keeping Your Fork Updated
To stay up-to-date with the latest changes in the main repository, you’ll need to sync your fork:

- Add the original repository as a remote:

```bash
git remote add upstream https://github.com/arshadcodes/AgencyWebsite.git
```

- Fetch the latest changes:

```bash
git fetch upstream
```

- Merge the changes into your branch:

```bash
git merge upstream/main
```


### 📚 Additional Resources
If you’re new to Git or GitHub, here are some helpful resources:

- [Using Git](https://docs.github.com/en/get-started/using-git/about-git)
- [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow)

Congratulations! 🎉 you've made your contribution.
