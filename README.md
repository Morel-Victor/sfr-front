# SFR Project (part 2/2)

The SFR project is a clone of the website sfr.fr. My goal was to create a version as close as possible to the original site. The first step is to install Strapi for the back end (https://github.com/Morel-Victor/sfr-strapi) Then, the second step is to install the front end from this repository.

**Local version**

![](https://i.ibb.co/pPzmtJF/sfr.png)
#### Install of Front:

The front end is built with Vue 3 using the Composition API in the script setup syntax, and I use Quasar as the component library (check out the Quasar documentation here: https://quasar.dev/). Quasar is one of the best libraries for Vue. it allows you to easily customize all components with simple CSS, without wasting time.

- ```git pull origin main``` to have the front project
-  ```cd your-src-folder-path ```
-  ```npm install ``` to install dependensies
-  ```quasar dev```to lunch project (If you encounter an error, try changing the versions of npm and Node, and install Quasar globally)
