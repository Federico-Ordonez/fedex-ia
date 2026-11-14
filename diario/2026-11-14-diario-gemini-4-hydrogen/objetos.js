export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(1.0, 96, 64), M.pearl, [-0.5, 1.0, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.55, 0.07, 32, 128), M.blue, [-0.5, 1.0, 0], [1.2, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.graphite, [1.9, 0.55, 0.2], [0, 0.4, 0], g);
  },
  veloz({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.4;
    [1.2, 2.0, 2.8].forEach((w, i) => add(new RoundedBoxGeometry(w, 0.3, 1.0, 6, 0.1), M.pearl, [-1.6 + w / 2, 0.15 + i * 0.42, -0.6 + i * 0.1], [0, 0, 0], g));
    add(new RoundedBoxGeometry(0.9, 0.9, 0.9, 6, 0.14), M.blue, [2.0, 0.45, 0.9], [0, 0.3, 0], g);
  },
  donde({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(4.0, 0.24, 2.4, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    [[-1.3, M.silver, 1.1], [0, M.white, 1.5], [1.3, M.blue, 1.9]].forEach(([x, m, h]) => add(new THREE.CylinderGeometry(0.45, 0.45, h, 64), m, [x, 0.24 + h / 2, 0], [0, 0, 0], g));
  },
  costo({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 8; i++) add(disc(), M.silver, [-1.2, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 3; i++) add(disc(), i === 2 ? M.blue : M.pearl, [1.2, 0.1 + i * 0.24, 0.2]);
  },
};
