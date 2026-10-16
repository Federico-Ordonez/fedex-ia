export default {
  portada({ THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.4, 0);
    const g = Group(); g.rotation.y = -0.25;
    add(new THREE.SphereGeometry(1.15, 96, 64), M.pearl, [-1.9, 1.15, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.7, 96, 64), M.blue, [1.7, 0.7, 0.2], [0, 0, 0], g);
    [[-0.5, 1.5, 0.05, 0.2], [0.3, 1.95, 0.08, 0.22], [1.0, 1.7, 0.12, 0.2]].forEach(([x, y, z, r]) => add(new THREE.SphereGeometry(r, 48, 32), M.silver, [x, y, z], [0, 0, 0], g));
  },
  voces({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    for (let i = 0; i < 13; i++) {
      const h = 0.8 + 1.4 * Math.abs(Math.sin(i * 0.7 + 0.4));
      add(new RoundedBoxGeometry(0.3, h, 0.3, 6, 0.1), i === 6 ? M.blue : (i % 2 ? M.pearl : M.silver), [-2.55 + i * 0.425, h / 2, 0], [0, 0, 0], g);
    }
  },
  escalera({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.5;
    for (let i = 0; i < 4; i++) {
      const h = 0.5 + i * 0.5;
      add(new RoundedBoxGeometry(1.2, h, 1.8, 6, 0.1), i === 3 ? M.blue : (i % 2 ? M.white : M.graphite), [-2.0 + i * 1.3, h / 2, 0], [0, 0, 0], g);
    }
  },
  ajuste({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(5.0, 0.3, 1.1, 6, 0.14), M.silver, [0, 0.15, 0], [0, 0, 0], g);
    [-1.6, 0.1, 1.7].forEach((x, i) => add(new THREE.CylinderGeometry(0.5, 0.5, 0.5, 96), i === 1 ? M.blue : M.pearl, [x, 0.55, 0], [0, 0, 0], g));
  },
};
