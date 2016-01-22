Package.describe({
	name: 'ls3271:meteor-linkify',
	version: '0.0.5',
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
	api.add_files('lib/linkify/linkify.min.js');
	api.add_files('lib/linkify/linkify-jquery.min.js', 'client');
});
