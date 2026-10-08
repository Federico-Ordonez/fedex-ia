export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(2.2, 2.2, 2.2, 6, 0.2), M.graphite, [-1.1, 1.1, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.9, 0.9, 0.9, 6, 0.12), M.blue, [1.5, 0.45, 0.4], [0, 0.3, 0], g);
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 9; i++) add(disc(), M.pearl, [-1.2, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 2; i++) add(disc(), i === 1 ? M.blue : M.pearl, [1.2, 0.1 + i * 0.24, 0.2]);
  },
  nubes({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.16), M.blue, [-1.7, 0.65, 0], [0, 0, 0], g);
    [[0.2, 1.9, 0.6], [1.1, 0.6, -0.6], [1.7, 1.8, 0.2]].forEach(([x, y, z], i) => {
      add(new THREE.SphereGeometry(0.6, 64, 48), i === 1 ? M.white : M.pearl, [x, y, z], [0, 0, 0], g);
      cyl(V(-1.7, 0.65, 0), V(x, y, z), 0.045, M.silver, g);
    });
  },
  cinta({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.7, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(5.4, 0.3, 1.6, 6, 0.1), M.slate, [0, 0.15, 0], [0, 0, 0], g);
    for (let i = 0; i < 5; i++) add(new RoundedBoxGeometry(0.7, 0.7, 0.7, 6, 0.1), i === 3 ? M.blue : M.pearl, [-2.0 + i * 1.0, 0.65, 0], [0, 0, 0], g);
  },
};
