export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.5, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.3, 3.0, 0.18, 6, 0.08), M.pearl, [-0.4, 1.5, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.7, 64, 48), M.blue, [1.7, 0.7, 0.6], [0, 0, 0], g);
  },
  crea({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.5;
    [M.white, M.silver, M.pearl, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(2.8, 0.22, 3.4, 6, 0.08), m, [0, 0.11 + i * 0.3, 0], [0, i * 0.12, 0], g));
  },
  web({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.3, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.4, 2.2, 0.16, 6, 0.08), M.pearl, [-0.6, 1.4, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.4, 0.8, 0.4, 6, 0.08), M.silver, [-0.6, 0.4, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 0.14, 0.7, 6, 0.06), M.silver, [-0.6, 0.07, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.8, 1.5, 0.14, 6, 0.1), M.blue, [2.0, 0.75, 0.5], [0, -0.2, 0], g);
  },
  resalta({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.5, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(2.6, 3.2, 0.18, 6, 0.08), M.pearl, [0, 1.6, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.1, 0.5, 0.12, 6, 0.06), M.blue, [0, 1.9, 0.14], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.5, 0.16, 0.1, 6, 0.05), M.silver, [-0.3, 1.1, 0.14], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.9, 0.16, 0.1, 6, 0.05), M.silver, [-0.1, 0.7, 0.14], [0, 0, 0], g);
  },
};
