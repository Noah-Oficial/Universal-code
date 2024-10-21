const Config = require("../Config/Configs")
const Web = {
    Api:function(URL){
        if (URL == null){return Configs.Settings.Language.Invalid_Value}
        return fetch(URL).then(response => {
            if (!response.ok){
                console.log(Config.Settings.Language.Invalid_Value)
            }else{
                return response.json()
            }
        })
    },

    
}

const Extra = {
    Array_Separation:function(Array=[],Data=""){

        if (typeof(Array) != "object" || typeof(Data) != "string")return Config.Settings.Language.Invalid_Value

        for (i=0;i<Array.length;i++){
            if (Array[i] === Data){
                return Array[i]
            }
        }
    },
    
    Tiny:function(Text){
        if (typeof(Text) != "string") return Config.Settings.Language.Invalid_Value
        return Text.toLowerCase()
    },

    String_Invert:function(Text){
        if (typeof(Text) != "string") return Config.Settings.Language.Invalid_Value
        return Text.split('').reverse().join('')
    },

    

}


module.exports = {
    Web,
    Extra
}