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
            console.log(b);
            

const bs = Object.fromEntries(
    Object.entries(b).sort(([k1], [k2]) => k1.localeCompare(k2)*-1)
);