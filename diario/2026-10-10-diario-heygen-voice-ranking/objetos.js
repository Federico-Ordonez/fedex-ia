// Objetos 3D del post HeyGen Voice.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.3;
    const h = [0.8, 1.6, 2.4, 1.4, 2.0, 1.0, 0.6];
    h.forEach((v, i) => add(new RoundedBoxGeometry(0.5, v, 0.5, 6, 0.2), i === 2 ? M.blue : i % 2 ? M.silver : M.pearl, [-1.95 + i * 0.65, v / 2, 0], [0, 0, 0], g));
  },
  ranking({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new RoundedBoxGeometry(1.2, 1.2, 1.2, 6, 0.12), M.silver, [-1.3, 0.6, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 1.9, 1.2, 6, 0.12), M.white, [0, 0.95, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.2, 0.8, 1.2, 6, 0.12), M.pearl, [1.3, 0.4, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.5, 64, 48), M.blue, [0, 2.4, 0], [0, 0, 0], g);
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.45;
    add(new RoundedBoxGeometry(2.0, 2.8, 0.18, 6, 0.08), M.pearl, [-0.6, 1.4, -0.4], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.9, 2.7, 0.14, 6, 0.08), M.silver, [-0.3, 1.35, 0.3], [0, 0.7, 0], g);
    add(new THREE.TorusGeometry(0.35, 0.11, 24, 64), M.blue, [1.1, 0.4, 0.9], [Math.PI / 2, 0, 0], g);
    add(new THREE.CylinderGeometry(0.09, 0.09, 1.0, 32), M.blue, [1.95, 0.4, 0.9], [0, 0, Math.PI / 2], g);
  },
  narra({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.3, 1.3, 1.3, 6, 0.16), M.pearl, [-1.9, 0.65, 0], [0, 0, 0], g);
    [0.8, 1.3, 1.8].forEach((r, i) => add(new THREE.TorusGeometry(r, 0.07, 24, 96, Math.PI * 0.8), M.silver, [-1.2 + i * 0.05, 0.65, 0], [0, 0, -Math.PI * 0.4], g));
    add(new THREE.SphereGeometry(0.55, 64, 48), M.blue, [1.7, 0.55, 0], [0, 0, 0], g);
  },
};
