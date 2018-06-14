function Person(name) {
    var self = this;
    self.name = name;
    var spouse = null;

    self.getMarried = function (person) {
         if (self.isMarriedWith(person)) {
            return true;
        }
        else if (person.constructor !== self.constructor) {
            spouse = person;
            if (person.getMarried(self)) {
                return true;
            }
            else {
                spouse = null;
            }
        }
        return false;
    }

    this.isMarriedWith = function (person) {
        return spouse && spouse === person;
    }
}

function Man(name) {
    this.superConstructor.call(this,name);
}

var f = function() {};
f.prototype = Person.prototype;
Man.prototype = new f();
Man.prototype.constructor = Man;
Man.prototype.super = f.prototype;
Man.prototype.superConstructor = Person;
Man.prototype.getMarried = function(person) {
    return person instanceof Woman && this.super.getMarried().call(this);
}

function Woman(name) {
    this.superConstructor.call(this,name);
}

Woman.prototype = new f();
Woman.prototype.constructor = Woman;
Woman.prototype.super = f.prototype;
Woman.prototype.superConstructor = Person;
Woman.prototype.getMarried = function(person) {
    return person instanceof Man && this.super.getMarried().call(this);
}

console.log(new Man("Make").getMarried(new Woman("Ann")));
console.log(new Man("Make").getMarried(new Man("Make")));







