export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.8, 1.8, 0.5, 6, 0.14), M.pearl, [-0.7, 1.0, 0], [0, 0, 0], g);
    edgeBox(-0.7, 1.0, 0, 2.6, 2.6, 1.2, 0.045, M.blue, g);
    add(new THREE.CylinderGeometry(0.55, 0.55, 1.1, 64), M.silver, [1.9, 0.55, 0.4], [0, 0, 0], g);
  },
  modelo({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    [[M.pearl, 1.0], [M.white, 1.5], [M.blue, 2.0]].forEach(([m, h], i) => add(new RoundedBoxGeometry(1.1, h, 1.1, 6, 0.14), m, [-1.4 + i * 1.4, h / 2, 0], [0, 0, 0], g));
  },
  acceso({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    for (let i = 0; i < 6; i++) add(new THREE.SphereGeometry(0.55, 64, 48), M.silver, [-2.6 + i * 1.0, 0.55, -1.0 - i * 0.05], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.8, 96, 64), M.blue, [0, 0.8, 1.0], [0, 0, 0], g);
  },
  precio({ THREE, cam, look, M, add }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const disc = () => new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96);
    for (let i = 0; i < 2; i++) add(disc(), i === 1 ? M.blue : M.silver, [-1.15, 0.1 + i * 0.24, 0]);
    for (let i = 0; i < 4; i++) add(disc(), i === 3 ? M.blue : M.silver, [1.15, 0.1 + i * 0.24, 0.2]);
  },
};
