// Objetos 3D del post de Claude Duet.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new THREE.SphereGeometry(0.95, 96, 64), M.pearl, [-0.7, 1.0, 0], [0, 0, 0], g);
    add(new THREE.TorusGeometry(1.5, 0.07, 32, 128), M.blue, [-0.7, 1.0, 0], [Math.PI / 2.4, 0.2, 0], g);
    add(new RoundedBoxGeometry(1.1, 1.1, 1.1, 6, 0.14), M.silver, [1.8, 0.55, 0.3], [0, 0.4, 0], g);
  },
  reloj({ THREE, cyl, V, cam, look, M, add, Group }) {
    cam.position.set(0, 2.2, 11); look(0, 1.5, 0);
    const g = Group(); g.rotation.y = -0.35;
    add(new THREE.CylinderGeometry(1.5, 1.5, 0.3, 96), M.white, [0, 1.5, 0], [Math.PI / 2, 0, 0], g);
    cyl(V(0, 1.5, 0.2), V(0, 2.4, 0.2), 0.08, M.blue, g);
    cyl(V(0, 1.5, 0.2), V(0.65, 1.15, 0.2), 0.08, M.graphite, g);
    add(new THREE.SphereGeometry(0.13, 32, 24), M.blue, [0, 1.5, 0.2], [0, 0, 0], g);
  },
  mapa({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 4.2, 11); look(0, 0.5, 0);
    const g = Group(); g.rotation.y = -0.5;
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
      const azul = i === 1 && j === 1;
      const h = azul ? 1.4 : 0.3;
      add(new RoundedBoxGeometry(1.0, h, 1.0, 6, 0.08), azul ? M.blue : (i + j) % 2 ? M.silver : M.graphite, [(i - 1) * 1.15, h / 2, (j - 1) * 1.15], [0, 0, 0], g);
    }
  },
  tareas({ RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(3.0, 0.5, 1.6, 6, 0.12), M.pearl, [0, 0.25, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.0, 0.5, 1.6, 6, 0.12), M.white, [0.5, 0.8, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.0, 0.5, 1.6, 6, 0.12), M.blue, [1.0, 1.35, 0], [0, 0, 0], g);
  },
};
