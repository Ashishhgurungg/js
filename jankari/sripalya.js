
        function goToLevel4() {

            
            const a = {
                v: "YTcxNg==",
                a: "NTUwZTg0MDA=",
                z: "NDQ2NjU1NDQwMDAw",
                t: "ZTI5Yg==",
                u: "NDFkNA=="
            }

            const b = {};
            for (const key in a) {
                b[key] = atob(a[key]);
            }

            const bs = Object.fromEntries(
                Object.entries(b).sort(([k1], [k2]) => k1.localeCompare(k2)*-1)
            );
            let ar=[];
            i=0;
            for (const k in bs) {
                ar[i] = bs[k];
                i++;
            }

            let o="";
            for (let j = ar.length; j > 0; j--) {
                let v = ar[j-1]
                v = v.trim();
                o += "-" + v;
            }
            o = o.substring(1);
            console.log("Next level: http://riddle.jankari.tech:8000/"+o+"?id=cmmfs7h1mg25kvg01m0s1flll&first_name=&last_name=")
        }

        goToLevel4();