nano Event plugin
=================

The **Event** plugin for the [nano JavaScript framework](http://nanojs.org) adds 2 new methods to the API wrapper: one to register event listeners on elements, and another to fire events. It also adds a new parameter to use when creating new DOM nodes, and extends the framework with the `nano.event` object, which includes 4 methods for manipulating events.

Installation
------------

To add the **Event** plugin include it in the `<head>` of the document, after the core framework:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Site</title>
    <script src="path/to/nano.js"></script>
    <script src="path/to/nano.event.js"></script>
  </head>
  <body>
		
    <!-- your content here -->
		
  </body>
</html>
```

Documentation
-------------

Full documentation for the plugin is available at [http://nanojs.org/plugins/event](http://nanojs.org/plugins/event).

Support
-------

For support, bugs and feature requests, please use the [issues](https://github.com/nanojs/nano-event/issues) section of this repository.

Contributing
------------

If you'd like to contribute new features, enhancements or bug fixes to the code base just follow these steps:

* Create a [GitHub](https://github.com/signup/free) account, if you don't own one already
* Then, [fork](https://help.github.com/articles/fork-a-repo) the [nano](https://github.com/nanojs/nano-event) repository to your account
* Create a new [branch](https://help.github.com/articles/creating-and-deleting-branches-within-your-repository) from the *develop* branch in your forked repository
* Modify the existing code, or add new code to your branch
* When ready, make a [pull request](http://help.github.com/send-pull-requests/) to the main repository

There may be some discussion regarding your contribution to the repository before any code is merged in, so be prepared to provide feedback on your contribution if required.

License
-------

Copyright 2008-2015 James Watts. All rights reserved.

Licensed under the GNU/GPL. Redistributions of the source code included in this repository must retain the copyright notice found in each file.
