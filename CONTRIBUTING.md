# Contributing to [Project Title]

First off, thank you for considering contributing to [Project Title]! It's people like you that make [Project Title] such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [issues](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues) if there's something similar already submitted. If not, feel free to open a new issue!

## Fork & create a branch

If you want to contribute with code:

1.  [Fork](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/fork) the repository to your own GitHub account.
2.  Clone the project to your machine: `git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git`
3.  Create a new branch: `git checkout -b my-new-feature` or `git checkout -b fix/issue-number`.

## Code Style and Linting

Please ensure your code adheres to the project's established style guides and passes linting checks.

- Follow TypeScript best practices (strict mode, interfaces over types, etc.).
- Use Tailwind CSS v4 conventions.
- Run `bun run lint` to check for linting issues before committing.

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. This allows for automated changelog generation and helps keep the commit history clean and understandable.

Commit messages should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Example:**

```
feat: add user authentication endpoint
```

```
fix(auth): resolve issue with token expiration

Closes #123
```

Common types include: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`.

## Submitting a Pull Request

1.  Push your changes to your fork: `git push origin my-new-feature`
2.  Go to the original repository ([https://github.com/YOUR_USERNAME/YOUR_REPO_NAME](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME)) and click "New Pull Request".
3.  Make sure the base repository is the original and the head repository is your fork and branch.
4.  Provide a clear title and description for your pull request, referencing any related issues (e.g., `Fixes #123`).
5.  Wait for review and address any feedback.

Thank you for your contribution!
