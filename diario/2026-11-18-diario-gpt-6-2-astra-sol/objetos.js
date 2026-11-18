export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.3, 2.6, 1.3, 6, 0.14), M.graphite, [-1.2, 1.3, 0], [0, 0.2, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [0.5, 0.55, 0.3], [0, 0.4, 0], g);
    add(new THREE.SphereGeometry(0.6, 64, 48), M.blue, [1.9, 0.6, 0.1], [0, 0, 0], g);
  },
  dos({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.CylinderGeometry(0.8, 0.8, 2.8, 96), M.pearl, [-1.0, 1.4, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.8, 0.8, 1.1, 96), M.blue, [1.2, 0.55, 0.2], [0, 0, 0], g);
  },
  planes({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.silver, M.white, M.graphite, M.blue].forEach((m, i) => { const h = 0.8 + i * 0.6; add(new RoundedBoxGeometry(1.0, h, 1.0, 6, 0.12), m, [-1.95 + i * 1.3, h / 2, 0], [0, 0, 0], g); });
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 8; i++) add(disc(), M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 6; i++) add(disc(), i === 5 ? M.blue : M.silver, [1.15, 0.1 + i * 0.24, 0.2]);
  },
};
