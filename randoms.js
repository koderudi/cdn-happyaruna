function nem(t,n){let r=Date.now().toString(),e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",o="";for(let l=0;l<n;l++){let a=Math.floor(Math.random()*e.length);o+=e.charAt(a)}return t+r+o}
