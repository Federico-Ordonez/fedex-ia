// Objetos 3D del post de ChatGPT Slides.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.35;
    [M.silver, M.pearl, M.white, M.blue].forEach((m, i) => {
      add(new RoundedBoxGeometry(2.6, 1.7, 0.12, 6, 0.05), m, [-1.2 + i * 0.8, 0.9 + i * 0.05, -0.9 + i * 0.6], [0, 0.0, 0.0], g);
    });
  },
  empieza({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 0.9, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(2.8, 1.8, 0.14, 6, 0.06), M.pearl, [-0.8, 1.0, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.6, 64, 48), M.blue, [-0.8, 1.0, 0.45], [0, 0, 0], g);
    [0, 1, 2].forEach(i => add(new RoundedBoxGeometry(1.0, 0.5, 1.0, 6, 0.1), M.white, [1.9, 0.25 + i * 0.52, 0.2], [0, 0.2 * i, 0], g));
  },
  edita({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(5.0, 0.2, 2.6, 6, 0.08), M.silver, [0, 0.1, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.7, 1.5, 0.12, 6, 0.05), M.graphite, [-1.4, 1.0, 0], [0, 0.15, 0], g);
    add(new RoundedBoxGeometry(1.7, 1.5, 0.12, 6, 0.05), M.graphite, [1.4, 1.0, 0], [0, -0.15, 0], g);
    cyl(V(-0.5, 1.0, 0.05), V(0.5, 1.0, 0.05), 0.12, M.blue, g);
  },
  acceso({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.1, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(4.4, 0.2, 2.0, 6, 0.08), M.white, [0, 0.1, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.4, 0.4, 2.4, 64), M.pearl, [-1.6, 1.4, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.4, 0.4, 2.4, 64), M.silver, [1.6, 1.4, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.2, 0.3, 0.5, 6, 0.1), M.blue, [0, 1.5, 0], [0, 0, 0], g);
  },
};
