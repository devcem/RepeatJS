# RepeatJS
High performance, 400byte javascript render library. It's similar AngularJS template system. You need to jquery when using RepeatJS. You can make your data loop easily with that library.

> That article is under construction.

## How to use?
It's easy to use, there are just to arguments. Selector is your object, and data is your javascript array object.
```
repeat(selector, data);
```

## Example

### Javascript
```
var blogData = [
  {
    title : "Article 1",
    desc  : "this is article content...",
    src   : "https://i.ytimg.com/vi_webp/LeRLFUuH5Lw/default.webp"
  },  
  {
    title : "Article 2",
    desc  : "This is my second day at work...",
    src   : "https://i.ytimg.com/vi_webp/LeRLFUuH5Lw/default.webp"
  }
];
	 		
repeat("#blog", blogData);
```

### HTML
```
<div id="blog">
	<h1>{{data.title}}</h1>
	<img repeat-src="{{data.src}}">
	<p>{{data.desc}}</p>
</div>
```

Take a look this jsfiddle page :
http://jsfiddle.net/rtsfo4t1/2/

## What can i do with that?
You can call your blog data with jquery load and make it loop...
```
$.get( "blog-data.json", function( data ) {
	repeat("#blog", data);
});
```

You can create image slider with clean codding
```
<div id="gallery">
	<img repeat-src="{{data}}">
</div>
```
```
var data = ["image-link1.jpg", "image-link2.jpg", "image-link3.jpg"];
repeat("#gallery", data);
```


### Todo list
- Will add push, remove and update
- Search in your data and filterby features
