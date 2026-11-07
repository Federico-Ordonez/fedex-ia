export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    for (let i = 0; i < 5; i++) add(new THREE.CylinderGeometry(0.85, 0.85, 0.2, 96), M.silver, [-0.9, 0.1 + i * 0.24, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.0, 0.1, 32, 120), M.blue, [-0.9, 1.5, 0], [0, 0.5, 0], g);
    add(new RoundedBoxGeometry(1.2, 1.2, 1.2, 6, 0.14), M.pearl, [1.7, 0.6, 0.2], [0, 0.4, 0], g);
  },
  conecta({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.14), M.pearl, [-1.9, 0.65, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.14), M.white, [1.9, 0.65, 0], [0, 0, 0], g);
    cyl(V(-1.2, 0.65, 0), V(1.2, 0.65, 0), 0.13, M.blue, g);
  },
  beta({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(1.0, 96, 64), M.silver, [-0.7, 1.0, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.45, 0.08, 32, 140), M.blue, [-0.7, 1.0, 0], [Math.PI / 2.3, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.white, [1.9, 0.55, 0.3], [0, 0.4, 0], g);
  },
  dobles({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.2, 11); look(0, 0.8, 0);
    const g = Group(); g.rotation.y = -0.45;
    add(new RoundedBoxGeometry(2.8, 0.14, 1.8, 6, 0.06), M.pearl, [-0.3, 0.07, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(2.8, 0.14, 1.8, 6, 0.06), M.blue, [0.2, 0.4, 0.35], [0, 0.12, 0], g);
    add(new THREE.CylinderGeometry(0.35, 0.35, 0.2, 64), M.silver, [-1.9, 0.1, 1.4], [0, 0, 0], g);
  },
};
