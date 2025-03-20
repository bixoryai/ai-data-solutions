# Contributing Guidelines

Thank you for considering contributing to our project! This document outlines the process for contributing to the project and the Git branching strategy we follow.

## Code of Conduct

Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md) to foster an inclusive and respectful community.

## Git Branching Strategy

### Main Branches

#### `main`

- Production-ready code
- Protected branch
- Requires pull request approval
- Only accepts merges from `develop` and `hotfix/*`

#### `develop`

- Main development branch
- Protected branch
- Requires pull request approval
- All feature development integrates here
- Must pass tests before merging to `main`

### Supporting Branches

#### `feature/*`

- Purpose: Development of new features
- Branch from: `develop`
- Merge to: `develop`
- Naming convention: `feature/descriptive-feature-name`
- Example: `feature/wallet-integration`

#### `hotfix/*`

- Purpose: Emergency fixes for production
- Branch from: `main`
- Merge to: Both `main` and `develop`
- Naming convention: `hotfix/descriptive-fix-name`
- Example: `hotfix/fix-login-bug`

#### `docs/*`

- Purpose: Documentation updates
- Branch from: `develop`
- Merge to: `develop`
- Naming convention: `docs/descriptive-doc-name`
- Example: `docs/api-documentation`

### Complete Feature Branch Workflow

1. **Start Feature Development**
   ```bash
   git checkout develop
   git pull origin develop              # Ensure develop is up-to-date
   git checkout -b feature/new-feature  # Create and switch to feature branch
   ```

2. **Work on Feature**
   ```bash
   # Make changes, then:
   git add .                           # Stage changes
   git commit -m "feat: add feature"   # Commit changes
   git push origin feature/new-feature # Push to remote
   ```

3. **Create Pull Request**
   - Create PR from `feature/new-feature` to `develop`
   - Ensure CI checks pass
   - Get code review and approval
   - Merge PR on GitHub

4. **Post-Merge Cleanup**
   ```bash
   git checkout develop                # Switch to develop
   git pull origin develop            # Sync local develop
   git branch -d feature/new-feature  # Delete local feature branch
   ```

### Workflow Guidelines

1. **Feature Development**
   ```
   develop → feature/new-feature → develop
   ```
   - Create feature branch from `develop`
   - Develop and test feature
   - Create PR to merge back into `develop`
   - Delete feature branch after merge

2. **Production Release**
   ```
   develop → main
   ```
   - Ensure all tests pass on `develop`
   - Create PR from `develop` to `main`
   - Merge after approval

3. **Hotfix Process**
   ```
   main → hotfix/bug-fix → main
                        → develop
   ```
   - Create hotfix branch from `main`
   - Fix the bug
   - Create PR to merge into both `main` and `develop`
   - Delete hotfix branch after merge

## Branch Protection Rules

1. `main` branch protection:
   - Require pull request reviews
   - Require status checks to pass
   - No direct pushes
   - No force pushes

2. `develop` branch protection:
   - Require pull request reviews
   - Require status checks to pass
   - No direct pushes
   - No force pushes

## Best Practices

1. Keep branches up to date with their parent branch
2. Write clear commit messages following [Conventional Commits](https://www.conventionalcommits.org/) format
3. Reference issue numbers in commits when applicable
4. Delete branches after merging
5. Keep PRs focused and reasonably sized
6. Ensure tests pass before requesting review

## Pull Request Process

1. Update the README.md or documentation with details of changes if appropriate
2. Update the CHANGELOG.md file with details of changes if applicable
3. The PR may be merged once you have the sign-off of at least one reviewer
4. If you do not have permission to merge, request a reviewer to merge it for you

## Questions?

If you have any questions or need help, please open an issue or contact the project maintainers. 