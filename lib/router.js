
//Main Configuration, default Router

Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    'topnav': {to: 'topnav'},
    'grid': {to: 'grid'}
  }
});

Router.route('/', {name: 'home'});

// Server Routes


Router.route('/process/mail', {
    where: "server",
    name: "receiveEmail",
    action: function (mail) {

      // var post = this.request.body;

      // console.log(post.subject);

      // console.log("**from:", post.envelope.from);
      // console.log("**to:", post.envelope.to);
      // console.log("body-text", post.text);
      // console.log("body-html", post.html);

      // console.log("**from with name: ", post.from);


        console.log("****mail: ", mail);
        this.response.statusCode = 200;
        this.response.end("success");
    }
});




//Server, Busboy multipart form


// if (Meteor.isServer) {

//   var Busboy = Meteor.npmRequire("busboy");

//     var fs = Npm.require("fs"),
//         os = Npm.require("os"),
//         path = Npm.require("path");

//     Router.onBeforeAction(function(req, res, next) {
        
        

//         // console.log("***  req.body ** normal  *** : " + req )

//         // console.log("***** req.body with util ****** " + util.inspect(req, { depth: null }));


//         var file = {}; // Store a file and then pass it to the request.

//         if (req.method === "POST") {
//             var busboy = new Busboy({
//                 headers: req.headers
//             });
//             busboy.on("file", function(fieldname, file, filename, encoding, mimetype) {
//                 var saveTo = path.join(os.tmpDir(), filename);
//                 var fileSizeBytes = 0;
//                 file.pipe(fs.createWriteStream(saveTo));

//                 file.on("data", function(data) {
//                     fileSizeBytes = fileSizeBytes + data.length;
//                 });

//                 file.on('end', function() {
//                     file = {
//                         originalFilename: filename,
//                         path: saveTo,
//                         size: fileSizeBytes
//                     };
//                 });
//             });
//             busboy.on("finish", function() {
//                 // Pass the file on to the request
//                 req.file = file;
//                 next();
//             });
//             // Pass request to busboy
//             req.pipe(busboy);
//         } else {
//             console.log("***** req.body with util ****** " + util.inspect(busboy, { depth: null }));
//             next();
//         }
//     });
// }



// if (Meteor.isServer) {
//     var Busboy = Meteor.npmRequire('busboy')
 
//     Router.onBeforeAction(function (req, res, next) {
//         var files = []; // Store files in an array and then pass them to request.
//         var image = {}; // crate an image object
        


//         if (req.method === "POST") {
//             var busboy = new Busboy({ headers: req.headers });

//             console.log("req***", req);
//             console.log("res***", res);

//             busboy.on("file", function (fieldname, file, filename, encoding, mimetype) {
//                 image.mimeType = mimetype;
//                 image.encoding = encoding;
//                 image.filename = filename;
                
//                 // buffer the read chunks
//                 var buffers = [];
 
//                 file.on('data', function(data) {
//                     buffers.push(data);
//                 });
//                 file.on('end', function() {
//                     // concat the chunks
//                     image.data = Buffer.concat(buffers);
//                     // push the image object to the file array
//                     files.push(image);
//                 });
//             });
            
//             busboy.on("field", function(fieldname, value) {
//                 req[fieldname] = value;
//             });
 
//             busboy.on("finish", function () {
//                 // Pass the file array together with the request
//                 req.files = files;
//                 next();
//             });
//             // Pass request to busboy
//             req.pipe(busboy);
//         }
//         else{
//             this.next();
//         }
//     });
// }

