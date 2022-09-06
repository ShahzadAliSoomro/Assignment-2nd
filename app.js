const mobile = {
     iphone:{
        v11pro:{
            ram:'64gb',
            rom:'2gb',
            price:10000
        },
        v12pro:{
            ram:'64gb',
            rom:'2gb',
            price:30000
        },
        v14:{
            ram:'64gb',
            rom:'2gb',
            price:17000
        },
     },
     infinix:{
        s4:{
            ram:'64gb',
            rom:'4gb',
            price:120000
        },
        s6:{
            ram:'64gb',
            rom:'4gb',
            price:23000
        },
        hot9:{
            ram:'64gb',
            rom:'4gb',
            price:107000
        },
     },
     realme:{
        reame9i:{
            ram:'128gb',
            rom:'6gb',
            price:100000
        },
        c35:{
            ram:'256gb',
            rom:'2gb',
            price:23000
        },
        c11:{
            ram:'64gb',
            rom:'3gb',
            price:10000
        },
     },
}

const newObj = {...mobile.iphone.v11pro};
console.log (newObj);

const newObj1 = {...mobile.infinix.hot9};
console.log(newObj1);

const newObj2 = {...mobile.realme.c11};
console.log(newObj2);

const array = {
    mob1:["inf","qmbl","iphn",4],
    mob2:['value1','value2','value3','value4'],
    mob3:['mob1','mob2','mob3','mob4'],
};
const newarray = [...array.mob1]
console.log(newarray);

const newarray1 = [...array.mob2]
console.log(newarray1);

const newarray2 = [...array.mob3]
console.log(newarray2);
