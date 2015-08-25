'use strict';

var cpx = require("cpx");
var path = require("path");
var fs = require("fs")

cpx.copy("./src/sass/base/*.scss", "../kui-base/sass/base", function(err){
  if(err){
    console.log(err);
  } else {
    console.log('copy base ok');
  }
});

function copyVar(){
	cpx.copy("./src/sass/util/variable.scss", "../kui-base/sass/util", function(err){
	  if(err){
	    console.log(err);
	  } else {
	    console.log('copy variable ok');
	  }
	});
}

fs.exists('../kui-base/sass/util/variable.scss',function(exists){
	if (!exists) {
		copyVar();
	}else{
		console.log("variable exists")
	};
});
