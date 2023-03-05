
 const yargs = require("yargs")
  
const data10 = require ("./subject")

yargs.command({
    command : "add",
    describe: "to add a Subject",
    // builder: {
    //     sub1 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
    //     sub2 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
    //     sub3 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
    //     sub4 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
    //     sub5 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
    //     sub6 : {
    //         describe: "adding a subject ",
    //         demandOption: true,
    //         type: "string"
    //     },
        
    // },
    handler: (x)=> {
    
        data10.addSubj(x.sub1 , x.sub2 , x.sub3 , x.sub4 , x.sub5 ,x.sub6  )
    }
 })






 yargs.command({
    command : "delete",
    describe: "to delete an item",
    handler: (x)=> {
        data10.deleteClient(x.id)
    }
 })

 yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data10.readData (x.id)
    }
 })


 yargs.command ({
    command :"list",
    describe : "list data",
    handler : ()=>{
        data10.listData()
    }
 })
 

yargs.parse() 
   
  



