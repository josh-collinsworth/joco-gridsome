---
title: "How to Create a Simple WordPress Shortcode"
date: "null"
coverImage: "learn_shortcodes.png"
---

If you've been using WordPress for any length of time, you've probably already encountered a shortcode or two.

They're handy little snippets to insert various kinds of content or functionality in your content that wouldn't otherwise be possible. As an example: lots of gallery, slider and form plugins give you a shortcode that you can simply insert into your content anywhere you like. They usually look something like this one:

`[example_shortcode]`

**Shortcodes cause something special to happen wherever they're used. **Just plug that snippet anywhere in the text of a page, post, etc., and WordPress will automatically execute the corresponding action. For example, if that shortcode puts a contact form on the page, WordPress will replace the shortcode with the form's HTML. When somebody views the page, instead of seeing the `[shortcode]` text, they'd see an actual functioning form!

You can define custom shortcodes to do whatever you want, and they can be extremely simple, or pretty complex. Let's take a look at some examples!

**NOTE: **we'll be working with a little bit of PHP here, in your theme's functions.php file. If you aren't using a child theme (or a custom/starter theme that's ok to edit without fear of updates ruining your changes), you'll want to [create a child theme](https://joshcollinsworth.com/wordpress-child-theme-explanation/) before starting.

## Example #1: A Simple Shortcode

> Let's say we want a shortcode that puts some author info into a post. In this example, we'll just have a shortcode output the full bio, rather than needing to type it manually.

### Step 1: add the shortcode to your theme's functions.php file

You'll need to make some code edits here. The PHP involved is very simple, but if you're completely new to PHP, you might want to get the basics down before trying this, as a bit of incorrect PHP code in your functions.php file can break the whole site!

**You'll be using the `add_shortcode` function to give your shortcode a name, and tell WordPress what it should do any time it the shortcode is used.** Add a line like this to your theme's functions.php file:

add\_shortcode( 'author\_bio', 'create\_author\_bio' );

Note that `'author_bio'` and `'create_author_bio'` are just names; there's nothing special about those words on their own.They could really be anything you want. Let's break them down a little bit, so we understand what's actually going on here:

1. The first argument—in this case, `author_bio`—tells WordPress the actual name of your shortcode. this will be the name that users can type, in brackets, to use our shortcode. So with this code,`[author_bio]` will be the shortcode.Note that name can be anything, but it's always best to try to be unique. That way, you won't run the risk of your shortcode name conflicting with somebody else's in another installed plugin or theme.
2. The _second _argument—in this case, `create_author_bio`—points WordPress toward the actual PHP function with the code to execute whenever this shortcode is used. We'll create that function in the next step. It's what will actually run behind the scenes to transform the shortcode from text into whatever we want to go in its place. For right now, though, all we need to do is tell WordPress its name. (This name should also be unique.)

So if you wanted to, you could think of the code kind of like this: `add_shortcode( 'whenever_you_see_THIS', 'do_THIS' );`

If you're interested in more detail, you can read the `add_shortcode` [Codex entry](https://codex.wordpress.org/Function_Reference/add_shortcode).

### Step 2: create the function to handle the shortcode

Now we need to create the function we just named! Since we just told WordPress in the last step that the name of our function is `create_author_bio`, our function should look like this

add\_shortcode( 'author\_bio', 'create\_author\_bio' );
 **function create\_author\_bio(){** **//Code goes here!** 
 **//This is what happens when the shortcode is used.** **}**

Those lines that begin with `//` are comments; they aren't actual code, and they won't do anything. We'll make our function actually do something in the next step. For now, just notice that there are really only two pieces here; the registration of the shortcode, and what happens when it's used. It's really that simple!

 

### Step 3: make the function do something!

Now all that's left is to make our function do what we want!

A function like this could do anything, but eventually, it should **return **a single value (like a string of text). That value could also be anything—short or long, simple or complex—but whatever it is, that's what will appear wherever our shortcode is used.

For our purposes, this could just be some simple HTML; here's an example of something we might want to add to the page to get an author image and bio paragraph inside a `<section>` element with a custom class:

<section class="author-bio-box">
    <img src="https://upload.wikimedia.org/wikipedia/en/1/1f/Bilbo\_Baggins\_Tolkien\_illustration.jpg">
    <p>Bilbo Baggins is the author of The Hobbit, translator of various works from the elvish, and author of a number of poems and songs.</p> 
    <p>He is the oldest Hobbit ever in Middle Earth, and spends his days in his Tol Eressëa home across the sea.</p>
</section>

For right now, the `author-bio-box` class on that first line won't do anything, but you could easily target this box with custom CSS to make it stand out from the article and look distinctive.

Now you need to do is have your shortcode's function `return` the above HTML.

Since that's a lot to put inside a function, you can tidy things up by saving the text string in a PHP variable. It's not necessary, but it helps keep things a little cleaner:

add\_shortcode( 'author\_bio', 'create\_author\_bio' ); 

if( !function\_exists( 'create\_author\_bio' ) ){
    function create\_author\_bio(){
        **return '<section class="author-bio-box"><img src="author-photo.jpg"><p>Bilbo Baggins is the author of The Hobbit, translator of various works from the elvish, and author of a number of poems and songs. He is the oldest Hobbit ever in Middle Earth, and spends his days in his Tol Eressëa home across the sea.</p></section>';**
    }
}

**That's it! **Once we've saved our functions.php file, we're all set! A user can simply enter `[author_bio]` in any page or post, and the above HTML will appear instead!

 

 

 

 

Here's the CSS I used, personally, to get the post looking like the screenshot. (You may need to adjust, though, based on your own site's fonts and CSS rules already in place.)

.author-bio-box {
 background: #d6eef2;
 padding: 1em;
 overflow: auto;
}

.author-bio-box img {
 float: left;
 max-width: 9em;
 height: auto;
 margin: 0 1em 0 0;
}

.author-bio-box > p:first-of-type:first-letter {
 font-size: 3em;
 line-height: 1;
 float: left;
 margin: 0;
}

.author-bio-box > p:last-of-type {
 margin: 0;
}

 

#### Recommended: make the function pluggable

This isn't specific to shortcodes, and it isn't strictly needed, but it's best practice.

If two PHP functions are named the same thing, the result will be a fatal error that will prevent the site from even loading. That's bad, and we want to make sure that never happens.

We can do that by making our function "pluggable"; in other words, telling WordPress _not _to define the function if it already exists. We just wrap our existing code inside of this conditional statement:

**if( !function\_exists( 'create\_author\_bio' ) ){**
    function create\_author\_bio(){
         //Code goes here!   
        //This is what happens when the shortcode is used.
     }
**}**

**It's still best to name functions as uniquely as possible. **Even if you've made your function pluggable, if there's another function with the same name, your code won't work. You've avoided the fatal error, yes, but at the cost of your shortcode not working properly. So always use unique function names!
