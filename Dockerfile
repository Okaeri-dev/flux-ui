
# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.19.1

################################################################################
# Base image with Node
FROM node:${NODE_VERSION}-alpine AS base

# Set working directory
WORKDIR /usr/src/app

################################################################################
# Stage: deps - install all dependencies
FROM base AS deps

# Copy all package.json and yarn.lock files
COPY package.json yarn.lock ./

COPY flux/package.json flux/yarn.lock ./flux/
COPY flux-utilities/package.json flux-utilities/yarn.lock ./flux-utilities/

# Install root dependencies
RUN yarn install --frozen-lockfile

# Install package-specific dependencies (monorepo style)
RUN yarn --cwd flux install --frozen-lockfile
RUN yarn --cwd flux-utilities install --frozen-lockfile

################################################################################
# Stage: build - build the Angular app
FROM deps AS build

# Copy the rest of the application source code
COPY . .

# Build the app (this assumes "build flux" works via ng)
RUN yarn run build flux
RUN yarn run build flux-utilities

################################################################################
# Stage: final - lightweight image for running the app
FROM base AS final

ENV NODE_ENV production

# Install a lightweight static file server
RUN yarn global add http-server

# Copy built Angular app from build stage
COPY --from=build /usr/src/app/dist/flux /usr/src/app/dist/flux

# Set working directory to the dist folder
WORKDIR /usr/src/app/dist/flux/browser

# Serve with http-server
USER node
EXPOSE 4200
CMD ["http-server", ".", "-p", "4200", "--spa"]
