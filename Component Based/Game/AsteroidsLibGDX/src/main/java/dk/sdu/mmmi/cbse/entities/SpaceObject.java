package dk.sdu.mmmi.cbse.entities;

import java.util.ArrayList;

import dk.sdu.mmmi.cbse.main.Game;


public class SpaceObject {
	
	protected float x;
	protected float y;
	
	protected float dx;
	protected float dy;

	protected final int maxRockets = 4;
	protected ArrayList<Rocket> rockets;

	protected float radians;
	protected float speed;
	protected float rotationSpeed;

	protected boolean space;
	
	protected int width;
	protected int height;
	
	protected float[] shapex;
	protected float[] shapey;
	
	public void setSpace(boolean b) {
        space = b;
	}
	
	public boolean getSpace() {
		return space; 
	}

	public void shoot() {
		if (rockets.size() >= maxRockets) {
			return;
		} else {
			rockets.add(new Rocket(x, y , radians));
		}
	}

	
	protected void wrap() {
		if(x < 0) x = Game.WIDTH;
		if(x > Game.WIDTH) x = 0;
		if(y < 0) y = Game.HEIGHT;
		if(y > Game.HEIGHT) y = 0; 
	}
	
}


















