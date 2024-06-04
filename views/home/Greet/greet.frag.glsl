#version 300 es

precision mediump float;

in vec2 vUV;
uniform float u_time;
uniform vec2 screenSize;
out vec4 fragColor;

float random_11(float _uv_x) {
    return fract(sin(_uv_x * 1600.f) * 5000.f);
}
//smooth noise 1d
float smoothNoise_11(float _uv_x) {
    float t = fract(_uv_x);
    float id = floor(_uv_x);

    // t = t * t * (3.f - 2.f * t);
    t = t * t * t * (t * (t * 6.f - 15.f) + 10.f);
    float left = random_11(id + 0.0f);
    float right = random_11(id + 1.0f);
    float value = mix(left, right, t);

    return value;
}

//the API
float FBM_1D_noise(float _uv_x, int octaves, float frequency, float lacunarity, float amplitude, float gain) {
    float value = 0.f;
    float count_amplitude = amplitude;
    for(int i = 0; i < octaves; i++) {
        value += amplitude * smoothNoise_11(frequency * _uv_x);
        amplitude *= gain;
        frequency *= lacunarity;

        count_amplitude += amplitude;
    }
    value /= count_amplitude;
    return (value);
}

//1d noise
int D1_octaves = 3;//层数
float D1_frequency = 10.0f;//uv的缩放权重
float D1_lacunarity = 1.5f;//uv的缩放权重的增减，越大，uv的图越小

float D1_amplitude = 1.0f;//衰减权重
float D1_gain = 0.5f;//衰减权重的增减，越小，权重越小

float mountain(vec2 uv) {
    float height = FBM_1D_noise(uv.x, D1_octaves, D1_frequency, D1_lacunarity, D1_amplitude, D1_gain);
    float color_h;

    if(uv.y - 0.002f < height / 2.0f && uv.y + 0.002f > height / 2.0f) {
        color_h = 1.0f;
    } else {
        color_h = 0.0f;
    }
    return color_h;
}

void main() {
    vec2 uv = vUV;
    uv.x = uv.x + u_time * 0.1f;
    vec3 col = vec3(mountain(uv));
    fragColor = vec4(col, 1.0f);
}