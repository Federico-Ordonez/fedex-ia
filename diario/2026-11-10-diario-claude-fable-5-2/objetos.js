export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.6, 1.1, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.5, 0.07, 32, 128), M.blue, [-0.6, 1.1, 0], [Math.PI / 2.6, 0.3, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.9, 0.55, 0.3], [0, 0.4, 0], g);
  },
  rapido({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.35;
    [0.8, 1.3, 1.9, 2.6].forEach((h, i) => add(new THREE.CylinderGeometry(0.5, 0.5, h, 64), i === 3 ? M.blue : i === 1 ? M.silver : M.pearl, [-1.9 + i * 1.25, h / 2, 0], [0, 0, 0], g));
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, edgeBox, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(5.2, 0.24, 3.0, 6, 0.1), M.white, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 96), M.silver, [-1.4, 0.94, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.12), M.graphite, [1.4, 0.74, 0], [0, 0, 0], g);
    edgeBox(1.4, 0.94, 0, 1.8, 1.8, 1.8, 0.045, M.blue, g);
  },
  bloqueos({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.6, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.pearl, M.white, M.silver, M.blue].forEach((m, i) => { const s = i === 3 ? 0.7 : 1.1; add(new RoundedBoxGeometry(s, s, s, 6, 0.13), m, [-2.0 + i * 1.4, s / 2, 0], [0, 0.2 * i, 0], g); });
  },
};
