xlsxj = require("xlsx-to-json");

  xlsxj({
    input: "vouchers.xlsx", 
    output: "output.json",
    sheet: "2018"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });

