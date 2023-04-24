=== Schema madx ===
Contributors: hishaman, schemapress
Donate link: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NGVUBT2QXN7YL
Tags: schema, schema.org, json, json-ld, google, seo, structured data, markup, search engine, search, rich snippets, breadcrumbs, social, post, page, plugin, wordpress, content, article, news, search results, site name, knowledge graph, social, social profiles, keywords, meta-tags, metadata, tags, categories, optimize, ranking, search engine optimization, search engines, serp, sitelinks, google sitelinks, sitelinks search box, google sitelinks search box, semantic, structured, canonical, custom post types, post type, title, terms, media, images, thumb, featured, url, video, video markup, video object, VideoObject, video schema, audio object, AudioObject, audio schema, audio, sameAs, about, contact, amp, mobile, taxonomy
Requires At Least: 4.0
Tested Up To: 5.1.1
Requires PHP: 5.4
Stable Tag: 1.0.6
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Get the next generation of Schema Structured Data to enhance your WordPress site presentation in Google search results.

== Description ==

Super fast, light-weight plugin for adding schema.org structured data markup in recommended JSON-LD format automatically to WordPress sites.

Enhanced Presentation in Search Results By including structured data appropriate to your content, your site can enhance its search results and presentation.

Check out the [Plugin Homepage](https://schema.press/) for more info and [documentation](https://schema.press/docs-madx/).


### What is Schema markup?

Schema markup is code (semantic vocabulary) that you put on your website to help the search engines return more informative results for users. So, Schema is not just for SEO reasons, it’s also for the benefit of the searcher. 

### Schema Key Features

* Easy to use, set it and forget it, with minimal settings.
* Support for different schema.org types
* Enable Schema types at once per post type or post category.
* Enable Schema types anywhere you want on your site content.
* Integration: Customize source data of schema.org properties.
* Valid markup, test it in Google Structured Data Testing Tool.
* Output JSON-LD format, the most recommended by Google.
* Reuse data saved in post meta, which is created by other plugins.
* Extensible, means you can extend its functionality via other plugins, extensions or within your Theme’s functions.php file.

== Installation ==

1. Upload the entire `schema-madx` folder to the `/wp-content/plugins/` directory
2. DO NOT change the name of the `schema-madx` folder
3. Activate the plugin through the 'Plugins' menu in WordPress
4. Navigate to the `Schema > Settings` menu to configure the plugin
5. If you cache your site, make sure to clear cache after configuring the plugin settings.

== Frequently Asked Questions ==

= The plugin isn't working or have a bug? =

Send us detailed information about the issue by opening a [support ticket](https://schema.press/submit-ticket/) and we will get back to you.

= Is there any Documentation for this plugin? =

Indeed, detailed information about the plugin can be found on the [documentation section](https://schema.press/docs-madx/) on our website.

= Are you going to add support for new schema.org types in the future? =

Yes!

== Changelog ==

= 1.0.6 =
* Fix: Make sure we are not calling functions statically in main class.
* Fix: Remove opening hours meta post from post type schema.
* Fix: Possible bug in schema properties fields.
* Fix: Error on AMP markup output for special pages (contact and about pages).
* Fix: Not able to override author name by mapping property field value.
* Fix: PHP warning in post type list class in locations target column.
* Enhancement: Added check and display notice if ACF or ACF PRO is active.
* Enhancement: Added gtin8, gtin12, gtin13, gtin14, and mpn properties to Product markup.
* Enhancement: Added new features and settings for breadcrumbs markup.
* Enhancement: Added new function schema_madx_rating_star to be used by extensions.
* Enhancement: Display message on new post creation, when post id is not available yet.
* Enhancement: Display message when property fields are not set to new custom field.
* Enhancement: Added new function is_edit_page to check if it is an edit page.
* Enhancement: Load properties fields in wp instead of acf/init on non admin pages.
* Update: Drop support for Google+ since Google is dropping it.
* Update: Pumped tested WordPress version to 5.1.1 release.
* Tweak: Set alternativeHeadline property field to disabled.
* Tweak: Added more description for Default Image setting.
* Tweak: Changed order of Schemas sub setting, put author before breadcrumbs.

= 1.0.5 =
* Fix: Review markup and properties mapping, also added missing description property.
* Fix: Article markup and properties mapping.
* Enhancement: Avoid errors by adding a check for Schema free before activating.
* Enhancement: Remove Ratings column by Post Rating plugin from Schema post type.
* Tweak: Corrected typo in Schema > Settings > Schemas > Breadcrumbs setting item.
* Tweak: Added new type for post id and rating stars to columns class.
* Update: ACF PRO to the latest 5.7.13 version. 

= 1.0.4 =
* Fix: PHP notice in JobPosting additionalProperty, and LocalBusiness.
* Fix: Service markup.
* Enhancement: Added a couple of checks to avoid errors in VideoObject > YouTube.
* Enhancement: Added support for schema.org Person markup.
* Enhancement: Added markup by specific post id in location target post meta.
* Enhancement: Added review and aggregateRating to schema Service.
* Enhancement: Added support for category, keywords, and yield to Recipe markup.
* Enhancement: Added support for review and aggregateRating to Recipe markup.
* Enhancement: Added new settings tab for breadcrumbs.
* Tweak: Wording of custom meta key field in Schema > Type> properties options.

= 1.0.3 =
* Fix: Remove mainEntityOfPage from Product markup.
* Fix: Match @id and url properties in post type archives and terms.
* Fix: Links in license activation settings was pointing to wrong site.
* Fix: JobPosting markup was showing errors in Google testing tool.
* Enhancement: Added AggregateOffer support for schema.org Product.
* Enhancement: Added new fields to Product for highPrice and offerCount properties.
* Enhancement: Added new filters.php file for adding misc filters.
* Enhancement: append #product to permalink on post type product if found.
* Enhancement: Added markup by category in location target post meta.
* Enhancement: Allow disabling properties post meta field.
* Enhancement: Added missing description field for Local Business type.
* Tweak: Removed property url from Product schema markup.
* Tweak: Wording and descriptions in a few files.
* Tweak: Renamed few plugin functions prefix.
* Update: Pumped tested WordPress version to 5.1 release.
* Update: updated readme.txt file.

= 1.0.2 =
* Fix: Review markup output even if no rating value provided or equal zero.
* Fix: Bug when truncating titles.
* Fix: Bug in Event Offer Valid From date field causing it not to save dates.
* Fix: LocalBusiness and Service (address, geo, provider) fields when set fixed value.
* Enhancement: Added support for schema.org SoftwareApplication markup.
* Enhancement: Added support for 20 schema.org Event sub-types markup.
* Enhancement: Added fixed price range select field.
* Enhancement: Added fixed price range select field.
* Enhancement: Added prefix for plugin constants.
* Enhancement: Added new filters to custom fields to allow accept user rating.
* Update: Updated ACF Pro to version 5.7.12 release.
* Update: Updated plugin updater class to version 1.6.18 release.


= 1.0.1 =
* Fix: ACF date picker field was missing the date format.
* Fix: PHP Fatal error when truncating long headlines.
* Fix: Opening specification hours for LocalBusiness night shift was missing.
* Fix: Image custom field return attachment ID, now return Image Object.
* Fix: PHP Fatal error on LocalBusiness class, in opening hours.
* Enhancement: Added support for schema.org Review markup.
* Enhancement: Added support for schema.org Recipe markup.
* Enhancement: Added support for schema.org Course markup.
* Enhancement: Added support for schema.org Product markup.
* Enhancement: Added support for schema.org Service markup.
* Enhancement: Integration of WooCommerce.
* Enhancement: Added new function to return array of types that supports author markup.
* Enhancement: Added new function to code duration time like PT1H45M30S.
* Enhancement: Removed the Official Free extension tab from extensions settings page.
* Modified: modified some file names.
* Update: updated readme.txt file.

= 1.0.0 =
* Initial Release
