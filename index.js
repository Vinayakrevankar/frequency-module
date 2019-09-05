module.exports=function getFrequency(a) {

    if(Array.isArray(a))
    return a.reduce((r,k)=>{r[k]=1+r[k]||1;return r},{})
    else
    return a.split('').reduce((a, c)=>{a[c]++?0:a[c]=1;return a},{});  
}