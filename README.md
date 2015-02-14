# RepeatJS
You can render your data easily with Jquery. Loop, repeat, while.

## How to use?
It's easy to use, there are just to arguments. Selector is your object, and data is your javascript array object.
```
repeat(selector, data);
```

## Example
It's easy to use, there are just to arguments. Selector is your object, and data is your javascript array object.

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
