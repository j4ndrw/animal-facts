# Reflective log

## An attempt at implementing a MFE (micro front-ends) architected project with Turborepo as the monorepo manager, React as the FE library and Webpack5's module federation feature.

### Update 1

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

### Update 2

I tried a different approach this time. Instead of federating modules via Webpack5, I'm downloading
them via their manifest.json build. This is more limited than federating modules with Webpack, because I
had to load the render functions in the window object and loading it in the container app upon download.

Still, I think this is still a viable way of implementing MFE, as, the main goal is decoupling the app
into multiple apps, and this approach does the job.

The container is a Next app, while the MFEs are Vite + React apps.

I also got rid of the custom UI library, since I think that the usual way of using those is by
publishing them as separate packages (which, in hindsight, makes sense).

I think I'll use this project as a starter for future projects.

This approach was much easier than the module federation one with Webpack, but it was still difficult
to set up.

For now though, I think that, whenever I want to use MFEs, I'll probably use the configuration I used here:

-   Container app = Next.js (or Nuxt.js, or even CRA)
-   MFE apps = Vite or CRA (Might work well with Next too, but I have a hunch that it might be difficult due to features like SSR - I think MFEs work best with static components).

The other pitfall, which is not that big of a deal, but it still sucks, is that, due to using
a monorepo, Vercel triggers a deployment on every app, regardless of branch. This makes me think
(and this is strictly related to Vercel) that a multirepo would work better than a monorepo.
This would probably be different if I used something else to host the apps (maybe Firebase, GCP, AWS?).

Regardless - I'm glad this works.

The only thing left to do is to implement the actual thing - <b>Facts about cats and dogs!!!</b>
