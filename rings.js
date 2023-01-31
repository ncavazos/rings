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
setFunction({
  name: 'm_ring',
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
    float pct = 0.0;
    pct = distance(st,vec2(0.5));
    
    //smooth original circle
    float x = 0.0;
    x = smoothstep(.3,.36,pct);
    
    //smooth second circle
    float y = 0.0;
    y = smoothstep(.28,.31,pct);
    
    //gradient
    float sync = time/1.0;
    vec3 gr = vec3(abs(sin(st.x*3.14+time)));
    
    vec3 color = vec3(1.0-x-(1.0-y)-(gr));
    return vec4(color,1.0);`
})
setFunction({
  name: 'mc_ring',
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
    float pct = 0.0;
    pct = distance(st,vec2(0.5));
    
    //smooth original circle
    float x = 0.0;
    x = smoothstep(.3,.36,pct);
    
    //smooth second circle
    float y = 0.0;
    y = smoothstep(.28,.31,pct);
    
    //gradient
    float sync = time/1.0;
    float gr1 = float(abs(sin(st.x*1.57+time)/2.));
    float gr2 = float(abs(sin(st.x*3.14+time)/2.));
    float gr3 = float(abs(sin(st.x*6.28+time)/2.));
    
    vec3 color = vec3(1.0-x-(1.0-y)-(gr1));
    float cl1 = float(1.0-x-(1.0-y)-(gr1));
    float cl2 = float(1.0-x-(1.0-y)-(gr2));
    float cl3 = float(1.0-x-(1.0-y)-(gr3));
    return vec4(cl1,cl2,cl3,1.0);`
})
