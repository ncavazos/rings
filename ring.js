setFunction({
  name: 'ring',
  type: 'src',
  inputs: [
    {
      type: 'float',
      name: 'thresh1',
      default: .3,
    },
    {
      type: 'float',
      name: 'thresh2',
      default: .36,
    },
    {
      type: 'float',
      name: 'thresh3',
      default: .28,
    },
    {
      type: 'float',
      name: 'thresh4',
      default: .31,
    },
  ],
  glsl: `   vec2 st = _st;

//original circle
    float pct = 0.0;
    pct = distance(st,vec2(0.5));
    
    //smooth original circle
    float x = 0.0;
    x = smoothstep(.3,.36,pct);
    
    //smooth second circle
    float y = 0.0;
    y = smoothstep(.28,.31,pct);
    
    
    
    
    

    vec3 color = vec3(1.0-x-(1.0-y));

    return vec4(color,1.0);`
})
