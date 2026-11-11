// Objetos 3D del post. Cada función recibe ctx = { THREE, RoundedBoxGeometry, scene, cam, look, M, add, cyl, V, rrect, edgeBox, Group }.
export default {
  portada({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.4, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(2.3, 2.3, 0.22, 6, 0.1), M.silver, [-0.6, 1.15, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.5, 0.5, 0.2, 96), M.blue, [0.55, 2.3, 0.1], [Math.PI / 2, 0, 0], g);
    add(new RoundedBoxGeometry(1.0, 1.0, 1.0, 6, 0.13), M.graphite, [1.7, 0.5, 0.5], [0, 0.4, 0], g);
  },
  perfil({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 2.6, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(3.6, 2.4, 0.2, 6, 0.1), M.pearl, [0, 1.2, 0], [0, 0, 0], g);
    add(new THREE.CylinderGeometry(0.55, 0.55, 0.16, 96), M.blue, [-0.95, 1.3, 0.18], [Math.PI / 2, 0, 0], g);
    add(new RoundedBoxGeometry(1.5, 0.22, 0.14, 4, 0.07), M.white, [0.75, 1.6, 0.17], [0, 0, 0], g);
    add(new RoundedBoxGeometry(1.1, 0.22, 0.14, 4, 0.07), M.white, [0.55, 1.05, 0.17], [0, 0, 0], g);
  },
  requisitos({ THREE, RoundedBoxGeometry, cam, look, M, add, Group }) {
    cam.position.set(0, 3.0, 11); look(0, 1.0, 0);
    const g = Group(); g.rotation.y = -0.4;
    add(new RoundedBoxGeometry(0.5, 2.0, 0.5, 6, 0.1), M.graphite, [-1.7, 1.0, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(0.5, 2.0, 0.5, 6, 0.1), M.graphite, [1.7, 1.0, 0], [0, 0, 0], g);
    add(new RoundedBoxGeometry(3.4, 0.26, 0.26, 6, 0.1), M.blue, [0, 1.25, 0], [0, 0, 0], g);
    add(new THREE.SphereGeometry(0.6, 96, 64), M.silver, [0, 0.6, 1.9], [0, 0, 0], g);
  },
  revisa({ THREE, RoundedBoxGeometry, cam, look, M, add, cyl, V, Group }) {
    cam.position.set(0, 2.8, 11); look(0, 1.2, 0);
    const g = Group(); g.rotation.y = -0.3;
    add(new RoundedBoxGeometry(1.2, 1.2, 1.2, 6, 0.14), M.blue, [-0.5, 0.6, -0.6], [0, 0.4, 0], g);
    add(new THREE.TorusGeometry(1.15, 0.13, 32, 128), M.pearl, [-0.3, 1.5, 0.9], [0, 0, 0], g);
    cyl(V(0.55, 0.65, 0.9), V(1.6, -0.4 + 0.5, 0.9), 0.13, M.pearl, g);
  },
};
