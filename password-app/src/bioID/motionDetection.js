function MotionDetection() {
    let motion = [];
    ctx.drawImage(video, 0, 0, video.width, video.height);
    let data = ctx.getImageData(0, 0, video.width, video.height).data;
    for (let y = 0; y < video.height; y++) {
        for (let x = 0; x < video.width; x++) {
            let pos = (x + y * video.width) * 4;
            let r = data[pos];
            let g = data[pos + 1];
            let b = data[pos + 2];
            if (old[pos] && Math.abs(old[pos].red - r) > threshold) {
                motion.push({ x: x * scalefactor, y: y * scalefactor, r: r, g: g, b: b });
            }
            old[pos] = { red: r, green: g, blue: b };
        }
    }
    return motion;
}
function draw() {
    ctx.background(250);
    let motion = motionDetection();
    for (i = 0; i < motion.length; i++) {
        let m = motion[i];
        ctx.fillStyle = rgb(m.r, m.g, m.b);
        ctx.fillEllipse(m.x, m.y, sample_size, sample_size);
    }
}
let scalefactor = 40;
function setup() {
    video.width = w / scalefactor;
    video.height = h / scalefactor;
}

export default MotionDetection;