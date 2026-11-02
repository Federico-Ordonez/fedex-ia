export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(1.0, 96, 64), M.pearl, [-0.6, 1.0, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.7, 0.7, 0.14, 6, 0.1), M.blue, [-0.2, 1.0, 1.1], [0, 0.15, 0.12], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.9, 0.55, 0.2], [0, 0.4, 0], g);
  },
  barras({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.7, 0);
    const g = Group(); g.rotation.y = -0.35;
    [[1.2, M.pearl], [2.2, M.white], [3.4, M.blue]].forEach(([w, m], i) => add(new RoundedBoxGeometry(w, 0.7, 0.9, 6, 0.14), m, [-1.7 + w / 2, 0.35 + i * 0.85, -i * 0.3], [0, 0, 0], g));
  },
  paises({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.4, 11); look(0, 0.5, 0);
    const g = Group(); g.rotation.y = -0.3;
    for (let r = 0; r < 2; r++) for (let i = 0; i < 5; i++) add(new THREE.CylinderGeometry(0.5, 0.5, 0.4, 64), (r === 1 && i >= 2) ? M.blue : M.graphite, [-2.4 + i * 1.2, 0.2, -0.7 + r * 1.3], [0, 0, 0], g);
  },
  cubos({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(4.6, 0.24, 2.2, 6, 0.1), M.silver, [0, 0.12, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.pearl, [-1.5, 0.79, 0], [0, 0.2, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.blue, [0, 0.79, 0.5], [0, -0.2, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.white, [1.5, 0.79, 0], [0, 0.3, 0], g);
  },
};
