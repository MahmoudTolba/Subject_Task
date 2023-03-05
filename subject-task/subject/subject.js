
  const fs = require("fs")
  const yargs = require("yargs")

  

  const addSubj = (sub1 , sub2 , sub3 , sub4 , sub5 , sub6 ) => {
       const allData = loadData()

       sum = sub1+sub2+sub3+sub4+sub5+sub6;
       avg = (sum*100)/6;

        
        

        
        allData.push ({
            sub1 : sub1,
            sub2 : sub2,
            sub3 : sub3,
            sub4 : sub4,
            sub5 : sub5,
            sub6 : sub6,
            sum : sum,
            avg : avg
           
        })

        saveAllData(allData)
  
  }

  /////////////////////////////////////////////////////////////////
  const loadData = () => {
   
    try {
        const dataJson = fs.readFileSync ("subject10.json").toString()
        return JSON.parse (dataJson)
    } catch {
            return []
    }

  }
///////////////////////////////////////////////////////////////////

  const saveAllData = (allData) => {
      const saveAllDataJson = JSON.stringify(allData) 
      fs.writeFileSync("subject10.json" , saveAllDataJson)
  }
/////////////////////////////////////////////////////////////////////

//  const deleteClient = (id) => {
//         const allData = loadData()

//         const dataToKeep = allData.filter ((obj) => {
//              return obj.id !== id 
//         })
//         // console.log(dataToKeep)
//         saveAllData(dataToKeep)
//  }

// //////////////////////////////////////////////////////////////////
      
//         const readData = (id) => {
//             const allData = loadData()

//             const itemWanted = allData.find((obj) => {
//                  return obj.id == id 
//             })
//             console.log(itemWanted)

//         }
// //////////////////////////////////////////////////////////////////

//     const listData = () => {
//         const allData = loadData()

//         allData.forEach ((obj) => {
//             console.log(obj.fname , obj.city, obj.age)
//         })
//     }
     

module.exports = {
    addSubj,
    // deleteClient, 
    // readData,
    // listData
}