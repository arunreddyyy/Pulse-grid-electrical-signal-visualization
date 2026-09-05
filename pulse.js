(function () {
    const canvas = document.getElementById('grid');
    const ctx = canvas.getContext('2d');
    let W, H, cols, rows, spacing;
    const pulses = [];
    const speed = 260;
    const life = 1400;



    const themes = {
        dark: { bg: '#0f0f14', line: null,                         dotIdle: 'rgba(150,150,160,0.35)', pulse:[80, 170, 255] },
        midnight: { bg: '#0a1128',line: null,                      dotIdle: 'rgba(120,150,200,0.35)', pulse:[100, 220, 255] },
        light: { bg: '#f5f5f2', line: null,                        dotIdle: 'rgba(80,80,90,0.3)',     pulse:[30, 110, 220] },
        circuit: { bg: '#0a1410', line:'rgba(60,140,100,0.25)',  dotIdle: 'rgba(90,150,120,0.4)',   pulse:[80, 255, 170] },
        graph: { bg: '#fbfaf5' , line:'rgba(150,150,160,0.3)',   dotIdle: 'rgba(90,90,100,0.3)',    pulse:[210, 90, 50] }
    };
    let theme = themes.dark;

    document.getElementById('bgSelect').addEventListener('change', (e) => {
        theme = themes[e.target.value];
    });

    function resize() {
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        W = rect.width;
        H = rect.height;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0 ,0);
        spacing = 22;
        cols = Math.floor(W / spacing);
        rows = Math.floor(H / spacing);
    }
    resize();
    window.addEventListener('resize', resize);

    function cellCenter(c, r) {
        const offX = (W - (cols - 1) * spacing) / 2;
        const offY = (H - (rows - 1) * spacing) / 2;
        retuen [off + c * spacing, offY + r * spacing];
    }

    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let bestC = 0, bestR = 0, bestD = Infinity;
        for (let c = 0; c < cols; c++) {
            for( let r = 0; r < rows; r++) {
                const [cx, cy] = cellCenter(c, r);
                const d = (cx - x) * (cx - x) + (cy - y) * (cy - y);
                if (d < bestD) { bestD = d; bestC = c; bestR = r; }
            }
        }
        pulses.push({ c: bestC, r: bestR, t0: performance.now() });
    });

    document.getElementById('clearBtn').addEventListener('click', () => {
        pulses.length = 0;
    });



    function getVal(cx, cy, now) {
        let val = 0;
        for (const p of pulses) {
            const age = now - p.t0;
            if (age)
        }
    }
})