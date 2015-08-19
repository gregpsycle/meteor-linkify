Package.describe({
	name: 'lingxiaosun:meteor-linkify',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'JavaScript plugin for finding links in plain-text and converting them to HTML <a> tags.',
	// URL to the Git repository containing the source code for this package.
	git: 'https://github.com/sunny0825/meteor-linkify.git',
	// By default, Meteor will default to using README.md for documentation.
	// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.addFiles('lib/linkify/dist/jquery.linkify.js');
	api.addFiles('lib/linkify/dist/jquery.linkify.min.js');
});
