export default {
  portada({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.25;
    [[-2.1, 0.4, 0.2, M.pearl], [-0.8, 0.55, 0.9, M.silver], [0.5, 0.7, 1.3, M.white], [1.9, 0.9, 0.5, M.blue]]
      .forEach(([x, r, lift, m]) => add(new THREE.SphereGeometry(r, 64, 48), m, [x, r + lift, 0], [0, 0, 0], g));
  },
  cuadros({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 0.95, 0);
    const g = Group(); g.rotation.y = -0.3;
    [M.pearl, M.white, M.silver, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(1.15, 1.6, 0.12, 6, 0.05), m, [-2.0 + i * 1.35, 0.8, -i * 0.15], [0, 0.15 * i, 0], g));
  },
  pantallas({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.CylinderGeometry(0.6, 0.7, 0.14, 64), M.graphite, [-0.7, 0.07, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.2, 0.9, 0.2, 4, 0.05), M.graphite, [-0.7, 0.55, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.0, 1.8, 0.14, 6, 0.08), M.graphite, [-0.7, 1.7, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.95, 1.7, 0.12, 6, 0.1), M.blue, [1.7, 0.9, 0.5], [0, -0.2, 0], g);
  },
  escalera({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    [M.pearl, M.white, M.silver, M.blue].forEach((m, i) => { const h = 0.6 + i * 0.6; add(new RoundedBoxGeometry(1.1, h, 1.1, 6, 0.1), m, [-1.85 + i * 1.2, h / 2, 0], [0, 0, 0], g); });
  },
};
