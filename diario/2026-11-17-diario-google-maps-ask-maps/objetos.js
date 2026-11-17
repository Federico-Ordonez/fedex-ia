export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(5.2, 0.24, 3.0, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    const p = [V(-2, 0.7, 0.6), V(-0.5, 0.7, -0.5), V(0.9, 0.7, 0.5), V(2.1, 0.9, -0.4)];
    p.forEach((v, i) => add(new THREE.SphereGeometry(i === 3 ? 0.5 : 0.3, 64, 48), i === 3 ? M.blue : M.silver, [v.x, v.y, v.z], [0, 0, 0], g));
    for (let i = 0; i < 3; i++) cyl(p[i], p[i + 1], 0.07, M.white, g);
  },
  dias({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    [M.pearl, M.white, M.blue].forEach((m, i) => add(new RoundedBoxGeometry(2.6, 0.7, 1.8, 6, 0.14), m, [i * 0.4 - 0.4, 0.35 + i * 0.78, 0], [0, i * 0.12, 0], g));
  },
  moviles({ RoundedBoxGeometry, THREE, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.2;
    add(new RoundedBoxGeometry(1.3, 2.4, 0.2, 6, 0.1), M.graphite, [-1.5, 1.2, 0], [0, 0.35, 0], g);
    add(new RoundedBoxGeometry(1.3, 2.4, 0.2, 6, 0.1), M.silver, [1.5, 1.2, 0], [0, -0.35, 0], g);
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 80), M.blue, [0, 0.1, 0.9], [0, 0, 0], g);
  },
  turno({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.2, 0.24, 3.0, 6, 0.1), M.pearl, [0, 0.12, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.7, 0.7, 1.4, 96), M.white, [0, 0.94, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.55, 80, 56), M.blue, [0, 2.25, 0], [0, 0, 0], g);
  },
};
