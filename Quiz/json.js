var y = '{\
  "Link": [\
    [\
      "url1",\
      {\
        "rel": "next"\
      }\
    ],\
    [\
      "url2",\
      {\
        "rel": "foo",\
        "bar": "baz"\
      }\
    ]\
  ]\
}';
var x = JSON.parse(y);
console.log(JSON.stringify(x.Link[1][1].rel));
