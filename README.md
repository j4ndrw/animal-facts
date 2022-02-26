# Reflective log

## An attempt at implementing a MFE (micro front-ends) architected project with Turborepo as the monorepo manager, React as the FE library and Webpack5's module federation feature.

(Disclaimer - everything I will be saying below will be strictly related to federated modules as MFEs.)

So far, the setup has been super painful.

At some point, maybe, I'll try to build some sort of tool that helps in creating a MFE + module federation + monorepo project.
Such a tool should also be able to generate individual MFEs (kinda like Angular's `ng generate` does).

After some time setting up the monorepo and the MFEs, I managed to make them work locally, but when trying to
deploy to Vercel, it broke. For some reason, Vercel tries to get the remote entry point from `https://<url>/<url>/remoteEntry.js`,
rather than `https://<url>/remoteEntry.js`, which is odd. Perhaps I did something wrong, I'm not sure.

Regardless, I did learn quite a lot from this. In my opinion, federated modules are still a bit far in terms of production use in
a big project. Maybe for experimental projects / toy projects it may work, but I don't see how this can scale in a big project
without appropiate tooling for managing the federated modules (at least in the Turborepo + React ecosystem).
Again, this is my opinion at the time of writing, and I may be massively wrong.
I still have a lot to learn about this subject.

Nevertheless, I am quite excited. I really enjoy working with microservices and I am eager to see how (and if) federated modules will help
projects scale with a micro front-end architecture.
